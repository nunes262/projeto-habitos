import { Trash2 } from "lucide-react";
import { DayState } from "./components";
import Link from "next/link";

export default function Home() {
    const habits = {
        "Beber agua": {
            "2024-01-01": true,
            "2024-01-02": true,
            "2024-01-03": true,
        },
        Estudar: {
            "2024-01-01": true,
            "2024-01-02": false,
            "2024-01-03": false,
        },
    };

    const today = new Date();
    const todayWeekDay = today.getDay();
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const sortedWeekDays = weekDays
        .slice(todayWeekDay + 1)
        .concat(weekDays.slice(0, todayWeekDay + 1));

    return (
        <main className="container relative flex flex-col gap-8 pt-16 px-4">
            {habits === null ||
                (Object.keys(habits).length === 0 && (
                    <h1 className="text-neutral-300 mt-20 text-light text-3xl text-center">
                        Você não tem habitos cadastrados.
                    </h1>
                ))}

            {habits !== null &&
                Object.entries(habits).map(([habit, habitSreak]) => (
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold text-xl text-zinc-300">
                                {habit}
                            </h1>
                            <button className="text-red-500">
                                <Trash2 />
                            </button>
                        </div>

                        <section className="grid grid-cols-7 bg-zinc-700 rounded-lg p-2">
                            {sortedWeekDays.map((day) => (
                                <div
                                    key={day}
                                    className="flex items-center flex-col last:font-extrabold"
                                >
                                    <span className="text-zinc-300">{day}</span>
                                    <DayState day={undefined} />
                                </div>
                            ))}
                        </section>
                    </div>
                ))}

            <Link
                href="novo-habito"
                className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-semibold text-2xl p-2 rounded-lg"
            >
                Novo Hábito
            </Link>
        </main>
    );
}

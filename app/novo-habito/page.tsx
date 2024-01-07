const NewHabit = () => {
    async function newHabit(FormData: FormData) {
        "use server";
        const habit = FormData.get("habit");
        console.log(habit);
    }
    return (
        <main className="container flex flex-col gap-8 px-12 pt-16">
            <h1 className="text-4xl font-semibold text-center text-zinc-300">
                novo hábito
            </h1>

            <form className="flex flex-col gap-4" action={newHabit}>
                <input
                    type="text"
                    name="habit"
                    id="habit"
                    className="p-2 text-xl font-sans text-white rounded-lg bg-zinc-800 focus:outline-none"
                />
            </form>

            <button
                type="submit"
                className="bg-[#45EDAD] font-semibold text-2xl p-2 rounded-lg text-zinc-800 mt-8"
            >
                cadastrar
            </button>

            <button className="text-[#F85858] font-semibold text-2xl p-2 rounded-lg bg-zinc-800">
                cancelar
            </button>
        </main>
    );
};

export default NewHabit;

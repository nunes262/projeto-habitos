export const DayState = ({ day }: { day: boolean | undefined }) => {
    let image: [string, string, number?] = ["/images/circle.svg", "Circle", 12];

    if (day === true) image = ["/images/check.svg", "Check", 16];
    if (day === false) image = ["/images/x.svg", "x", 16];

    const [src, alt, size] = image;

    return (
        <div className="flex items-center justify-center h-9">
            <img src={src} height={size} width={size} alt={alt} />
        </div>
    );
};

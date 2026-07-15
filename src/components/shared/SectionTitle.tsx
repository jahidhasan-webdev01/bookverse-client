interface Props {
    badge: string;
    title: string;
    description: string;
}

export default function SectionTitle({
    badge,
    title,
    description,
}: Props) {
    return (
        <div className="mb-12 text-center">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                {badge}
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
                {title}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600">
                {description}
            </p>
        </div>
    );
}
export default function BookSkeleton() {
    return (
        <div className="animate-pulse overflow-hidden rounded-2xl border border-gray-200">
            <div className="h-72 bg-gray-200" />

            <div className="space-y-4 p-5">
                <div className="h-5 w-20 rounded bg-gray-200" />
                <div className="h-5 rounded bg-gray-200" />
                <div className="h-4 rounded bg-gray-200" />
                <div className="h-4 w-2/3 rounded bg-gray-200" />
                <div className="h-10 rounded-xl bg-gray-200" />
            </div>
        </div>
    );
}
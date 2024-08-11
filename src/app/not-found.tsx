export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="text-gray-600">Page not found</p>
            </div>
        </section>
    );
}
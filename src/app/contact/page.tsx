export default function ContactPage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p className="mt-4">
                The fastest way to reach me is email:{" "}
                <a className="underline" href="mailto:hello@amiralirad.com">hello@amiralirad.com</a>
            </p>
            <p className="mt-2 text-sm text-gray-600">
                (We can add a contact form with spam protection later.)
            </p>
        </main>
    );
}

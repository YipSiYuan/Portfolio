const Footer = () => {
    return (
        <div className="flex items-start justify-center md:items-center md:justify-center min-h-fit overflow-hidden c-space bg-gray-800">
            <footer className="w-full text-white">
                
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About</h3>
                            <p className="text-gray-400 pr-30">Passionate in programming and Game development</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Links</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="/">Home</a></li>
                                <li><a href="/projects">Projects</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                            <p className="text-gray-400">siyuan2104@email.com</p>
                            <p className="text-gray-400">+65 9620 0524</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
                        <p>&copy; 2026 Yip Si Yuan. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
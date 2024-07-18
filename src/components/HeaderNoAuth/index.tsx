import Link from "next/link"

const HeaderNoAuth = () => {
    return (
        <>
            <div className="h-20 max-w-full py-2 flex items-center justify-between flex-wrap mx-32" >
                <img src="/logo.png" alt="logo Wits" className="w-40"/>
                <div className="flex gap-3">
                    <Link href='/login'>
                        <button className="py-2 px-4 border border-white rounded text-white hover:border-fuchsia-600 hover:text-fuchsia-600 transition hover:duration-300">Entrar</button>
                    </Link>
                    <Link href='/register'>
                        <button className="py-2 px-4 border border-blue-600 rounded text-blue-600 hover:border-fuchsia-600 hover:text-fuchsia-600 transition hover:duration-300">Criar conta</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HeaderNoAuth
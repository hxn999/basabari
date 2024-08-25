


export function Verify() {

    return (
        <>
            <div className="flex gap-3 items-center">
                <img src="img/hasan.jpg.jpg" className="w-10 h-10 rounded-full" alt="" />
                <div>
                    <p>Posted by Hasibul Hasan <span className="text-[10px]">(Flat Owner)</span></p>
                    <p className="flex items-center gap-1"><img src="img/check.png" className="w-5 h-5" alt="" /> Verified by
                        <span className="font-bold"> Basa<span className="text-green-600">Bari</span></span>
                    </p>
                </div>
            </div>
            <hr className="mt-3" />
        </>
    )
}
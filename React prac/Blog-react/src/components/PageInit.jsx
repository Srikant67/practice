import { useContext } from "react"
import { AppContext } from "../context/AppContext";

export default function PageInit(){
    const {page, handlePageChange, totalPages} = useContext(AppContext);
    console.log(page);
    return(
        <div className="w-full flex justify-center items-center border fixed bottom-0 bg-white">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">
                <div className="flex gap-4">
                    { page > 1 && <button className="rounded-md border px-3 shadow-md py-1" onClick={() => handlePageChange(page-1)}>Previous</button>}
                    { page < totalPages && <button className="rounded-md border px-3 shadow-md py-1" onClick={() => handlePageChange(page+1)}>Next</button>}
                </div>
                <div><p>Page {page} of {totalPages}</p></div>
            </div>
        </div>
    )
}
export default function Card(props){
    return (
        <div className="my-6" key={props.post.id}>
            <p className="font-bold text-lg">{props.post.title}</p>
            <p className="text-[15px]">By <span className="italic">{props.post.author} on <span className="underline font-bold">{props.post.category}</span></span></p>
            <p className="text-[15px]">On <span>{props.post.date}</span></p>
            <p className="text-[18px] mt-[5px]">{props.post.content}</p>
            <div className="flex gap-x-3 ">
                {props.post.tags.map((tag, index)=>(<span className="text-blue-500 underline font-bold text-[14px]" key={index}>{`#${tag}`}</span>))}
            </div>
        </div>
    )
}
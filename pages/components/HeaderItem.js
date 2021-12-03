function HeaderItem({ Icon, title }) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white mb-15">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

/*

flex	display: flex;	엘리먼트의 배치 설정
items-center	align-items: center;	가운데 정렬
w-12	width: 3rem;	너비 설정
mb-1	margin-bottom: 0.25rem;	마진 설정
hover: text-white	--tw-text-opacity: 1; color: rgba(255, 255, 255, var(--tw-text-opacity));	마우스를 올렸을때, 텍스트 색상 설정
sm:w-20	@media (min-width: 640px) { ... }	화면 해상도에 따른 너비 설정

*/


export default HeaderItem


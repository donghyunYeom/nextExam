import {
    HomeIcon,
    SearchIcon,
    UserIcon,
    CubeIcon,
    HeartIcon,
    LinkIcon,
    MailIcon
} from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"

function Header() {
    return (
        <header className="flex-1 flex-col sm:flex-row m-5 justify-between items-center mb-15 text-center">
            <div className="flex-1 cursor-pointer transform hover:scale-105">
                <LinkIcon className="flex-1 h-20 inline-block" />
                <p className="flex-1 text-7xl font-extrabold inline-block" >Discord</p>
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
                {/* <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='MAIL' Icon={MailIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} /> */}
            </div>
        </header>
    )
}

export default Header
import "./ChatCSS.css"
import Logo from '../../img/nav-icons/icons-sosial/common.png'
import BasicBreadcrumbs from "./UI-Components/Story-Navigation";

export const Chat = () => {
    return (
        <div className={'Chat'}>
            <div className={'Chat-Navigation'}>

            </div>
            <div className={'TOP-menu-Bar'}>
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                    <BasicBreadcrumbs/>
                </div>
                <div className="Information">
                    <div className={'Chats-List'}></div>
                    <div className={'Chat-Sittings'}>
                        <div className={'Chat-List'}></div>
                        <div className={'Profile-Chat-Component'}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CounterUser=()=>{
    return <>
    <div className={"CounterUser"}>
        <div className={'MainblockCouter'}>
            <div><p>1–10 of 13</p></div>
            <div>
                <div className="MuiBox-root css-1zye22">
                    <button
                        className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium css-1yxmbwk"
                        tabIndex="-1" type="button" aria-label="first page" disabled="">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                             aria-hidden="true" viewBox="0 0 24 24" data-testid="FirstPageIcon">
                            <path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                        </svg>
                    </button>
                    <button
                        className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium css-1yxmbwk"
                        tabIndex="-1" type="button" aria-label="previous page" disabled="">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                             aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowLeftIcon">
                            <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                        </svg>
                    </button>
                    <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                            tabIndex="0" type="button" aria-label="next page">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                             aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon">
                            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                        </svg>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span></button>
                    <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                            tabIndex="0" type="button" aria-label="last page">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                             aria-hidden="true" viewBox="0 0 24 24" data-testid="LastPageIcon">
                            <path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                        </svg>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span></button>
                </div>
            </div>
        </div>
    </div>
    </>
}
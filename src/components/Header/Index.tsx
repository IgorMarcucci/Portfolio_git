import "./Header.css"

function Header(){

    const redirectToGitHub = (value: string) => {
        return window.location.href = value;
    }
    
    return (
        <div id="profile" className="header">
            <div className="contentHeader">
                <div className="heightButton" onClick={()=>{redirectToGitHub('https://www.linkedin.com/in/igor-marcucci/')}}>
                    <i className="devicon-linkedin-plain"></i>
                    <p className="m-2">
                        Igor Marcucci
                    </p>
                </div>
                <div className="heightButton" onClick={()=>{redirectToGitHub('https://github.com/IgorMarcucci')}}>
                    <p className="m-2">
                        GitHub
                    </p>
                    <i className="devicon-github-original"></i>
                </div>
            </div>

        </div>
    );
}

export default Header;
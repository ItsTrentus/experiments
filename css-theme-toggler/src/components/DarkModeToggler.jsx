import './DarkModeToggler.css';

export default function DarkModeToggler() {
    const body = document.querySelector('body');
    const theme = localStorage.getItem('theme');

    if (theme) setTheme(theme);

    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setTheme('dark');
        else setTheme('light');
    };

    return (
        <div className="dark_mode">
            <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" onClick={toggleTheme} defaultChecked={theme === 'dark'} />
            <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
        </div>
    );
}

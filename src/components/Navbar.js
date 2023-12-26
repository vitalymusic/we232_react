import './navBar.css';
function Navbar(){

    let menu = 
    [
        {
        name:"Main",
        href:"main.html"
        },
        {
            name:"About Us",
            href:"about.html"
        },
        {
            name:"Contacts Us",
            href:"contacts.html"
        },
    ]


    return(
        <nav>
            {
                menu.map((item,index)=>{
                    return (
                        <a href={item.href} key={index}>{item.name}</a>
                    )
                })
            }
        </nav>
    )
}

export default Navbar;
import { IoSearch } from "react-icons/io5";
import { HiArrowSmallRight } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Mainpage.css";
export default function Mainpage() {
    let icons=[
        {icon:FaInstagram},
        {icon:FaTwitter},
        {icon:FaFacebookSquare},
        {icon:FaYoutube},
        {icon:FaLinkedin},
    ];

return (
        <div className="w-full min-h-screen">
            <div className="w-full h-22 mt-5 border-y-2 border-black">
                <nav className="flex items-center justify-between font-medium">
                    <h1 className="premierDesign relative font-rubik border-black h-20 w-[20%] flex justify-center items-center font-black text-[39px] tracking-[-2px]">premier</h1>
                    {["Model", "Women/Man", "Agency/Blog/Information"].map((item, idx) => (
                        <h2 key={idx} className="border-r-2 border-black h-20 w-[24%] flex justify-center items-center text-[20px]">{item}</h2>
                    ))}
                    <h2 className="w-28 h-20 flex justify-center items-center">
                        <IoSearch className="text-2xl" />
                    </h2>
                </nav>
            </div>
            <div className="w-full h-[80vh] p-4 relative">
                <div className="w-full h-full p-5">
                    <img src="https://images.unsplash.com/photo-1719937206341-38a6392dfdef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" className="w-full h-full object-fit blur-[1px]" />
                    <div className="w-[93vw] h-[35vh] absolute bottom-10 text-white px-10  pt-3">
                        <div className="flex justify-between">
                            <h1 className="font-black font-rubik tracking-wide text-5xl leading-14">Photography <br />and Films</h1>
                            <p className="text-2xl w-16 h-16 rounded-full border-[1px] border-white flex items-center justify-center">01</p>
                        </div>
                        <div className="flex items-center justify-between mt-6 border-t-[1px] border-white pt-4">
                            <h1 className="text-xl font-semibold">Explore</h1>
                            <HiArrowSmallRight className="w-10 h-10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-48 overflow-x-hidden overflow-y-hidden mt-9 whitespace-nowrap">
                <div className="w-full h-full inline-block move">
                    <div className="flex gap-8">
                        {["https://images.unsplash.com/photo-1728323397587-3c992f2f6a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D",
                            "https://media.istockphoto.com/id/1336654290/photo/young-woman-on-purple-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=3tV1Skesf741cU3jldiN5IpAT7_wgcwhQSR03HyLFv4=",
                            "https://media.istockphoto.com/id/1209189181/photo/shes-beautiful-in-every-single-way.webp?a=1&b=1&s=612x612&w=0&k=20&c=FUpegCg9fY0yqLdmTRQq_cHCans4OkSs0jcMf7KaIbg=",
                            "https://media.istockphoto.com/id/1657460312/photo/beautiful-sensual-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=EOMsylemusxo5_bBUzjHml9_c88_OdAX87f8bsRI35M=",
                            "https://media.istockphoto.com/id/1297633362/photo/her-beauty-makes-it-hard-not-to-stare.webp?a=1&b=1&s=612x612&w=0&k=20&c=AnykcknXqLsMCDpHBr1ibbgOx1635qIcEhAQk7AMDi8=",
                            "https://plus.unsplash.com/premium_photo-1674718917543-074651e15f45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1618374845648-162318f1e486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"].map((image, idx) => (
                                <img src={image} key={idx} className="w-40 h-40 rounded-full object-cover object-top" />
                            ))}
                    </div>
                </div>
                <div className="w-full h-full inline-block move">
                    <div className="flex gap-8">
                        {["https://images.unsplash.com/photo-1604689010734-72dc5075512e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", "https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=IILOqvl3raePMkHI6h1iDJaeepdC26tAF6bJ3y4-XGw=", "https://media.istockphoto.com/id/1336654290/photo/young-woman-on-purple-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=3tV1Skesf741cU3jldiN5IpAT7_wgcwhQSR03HyLFv4=", "https://images.unsplash.com/photo-1620403724318-2d40745e0f1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D", "https://media.istockphoto.com/id/1657460312/photo/beautiful-sensual-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=EOMsylemusxo5_bBUzjHml9_c88_OdAX87f8bsRI35M=", "https://images.unsplash.com/photo-1617922236117-2697cb394593?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwcGhvdG98ZW58MHx8MHx8fDA%3D", "https://media.istockphoto.com/id/1285358279/photo/portrait-of-gorgeous-young-woman-joy-and-happiness-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=WAyN12ktQAAo5cxpiZV7WykiAyM5pCnumGA5uZsUKmQ="].map((image, idx) => (
                            <img src={image} key={idx} className="w-40 h-40 rounded-full object-cover object-top" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-24 uppercase flex items-center justify-center gap-1 italic font-poppins border-y-2 border-black">
                <h2 className="border-b-2 border-black tracking-wide text-2xl mr-4">All</h2>
                {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map((item, idx) => {
                    return <div key={idx} className="w-10 h-10 p-2cursor-pointer hover:border-[1px] border-black rounded-full flex items-center justify-center  cursor-pointer">
                        <h4 className="font-medium">{item}</h4>
                    </div>
                })}
            </div>
            <div className="w-full h-screen flex justify-between px-20 pt-20 mb-32" >
                <div className="w-[50%]">
                    <img src="https://images.unsplash.com/photo-1678801869299-87af89465bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww" className="w-full h-[90%] object-cover object-top rounded" />
                    <h1 className="uppercase font-poppins font-semibold text-4xl tracking-[-3px] mt-4">Vogue / shot</h1>
                </div>
                <div className="w-[40%] font-poppins">
                    <img src="https://images.unsplash.com/photo-1490092374320-1ca36d69ff6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww" className="w-full h-[90%] object-cover object-top rounded" />
                    <div className="flex justify-between items-center mt-3 px-2">
                        <h3 className="font-semibold leading-6 text-lg">Hannah Molter <br />features in a <br />fashion story by <br />the lake for <br />Vogue new shot</h3>
                        <p className="font-medium text-[#444444] leading-5 text-sm">Such exposure to the fashion and <br />beauty industries enabled her <br />passion for branding and <br />creativity to transition from one <br />side of the camera to the other.</p>
                    </div>
                </div>
            </div>
            <div className="h-[100vh]  flex justify-between px-20" >
                <div className="w-[50%]">
                    <img src="https://images.unsplash.com/photo-1524255684952-d7185b509571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" className="w-[90%] h-[80%] object-cover object-top  rounded" />
                    <h1 className="font-poppins font-semibold text-lg mt-4">Maison ARTC:memories and culture, <br />the base of futuristic fashion <br />awareness.Tilla Oulhaj look</h1>
                </div>
                <div className="w-[60%] font-poppins">
                    <img src="https://plus.unsplash.com/premium_photo-1671717725889-c0e43e6ed096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww" className="w-full h-[80%] object-cover object-top rounded" />
                </div>
            </div>
            <div className="px-20 w-full h-screen">
                <img src="https://images.unsplash.com/photo-1601830418750-6e4925911fce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxibGFjayUyMGJlYXV0eSUyMG1vZGVsfGVufDB8fDB8fHww" className="w-full h-[90vh]  object-cover rounded" />
            </div>
            <div className="w-full px-20">
                <h1 className="text-center font-bold font-rubik text-4xl uppercase mb-9">updates</h1>
                <div className="w-full py-7 px-4 tracking-tight font-poppins cursor-pointer hover:bg-[#e6e6e6] border-t-2 border-black flex items-center justify-between relative">
                    <img src="https://media.istockphoto.com/id/1139722168/photo/mid-adult-man-smiling-on-gray-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=StIQ0hApD1kgGPfdr1EC2wt7BzEv_4PiGUfn1-aR26Y=" className="absolute w-20 h-20 rounded-full left-48 object-cover" />
                    <h3 className="uppercase font-medium text-sm">mens <br /> fashion</h3>
                    <div className="w-[40%]">
                        <h2 className="font-medium  text-2xl">Khadim & Tom Ford</h2>
                        <p className="text-xs uppercase font-semibold">25th MARCH 2020</p>
                    </div>
                </div>
                <div className="w-full py-7 px-4 tracking-tight font-poppins cursor-pointer hover:bg-[#e6e6e6] border-t-2 border-black flex items-center justify-between relative">
                    <img src="https://images.unsplash.com/photo-1594157895135-57d7f66f2a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww" className="absolute w-20 h-20 rounded-full left-48 object-cover" />
                    <h3 className="uppercase font-medium text-sm">womens <br /> fashion</h3>
                    <div className="w-[40%]" >
                        <h2 className="font-medium  text-2xl">Arena Homme</h2>
                        <p className="text-xs uppercase font-semibold">3rd february 2020</p>
                    </div>
                </div>
                <div className="w-full py-7 px-4 tracking-tight font-poppins cursor-pointer hover:bg-[#e6e6e6] border-t-2 border-black flex items-center justify-between relative">
                    <img src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs=" className="absolute w-20 h-20 rounded-full left-48 object-cover" />
                    <h3 className="uppercase font-medium text-sm">special <br /> view</h3>
                    <div className="w-[40%]" >
                        <h2 className="font-medium  text-2xl">Jing for Wonderland</h2>
                        <p className="text-xs uppercase font-semibold">14th january 2020</p>
                    </div>
                </div>
                <div className="w-full py-7 px-4 tracking-tight font-poppins cursor-pointer hover:bg-[#e6e6e6] border-y-2 border-black flex items-center justify-between relative">
                    <img src="https://images.unsplash.com/photo-1727341557531-343cd4364501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbWFsZSUyMHBob3RvfGVufDB8fDB8fHww" className="absolute w-20 h-20 rounded-full left-48 object-cover" />
                    <h3 className="uppercase font-medium text-sm">models <br /> talk</h3>
                    <div className="w-[40%]" >
                        <h2 className="font-medium  text-2xl">Glass × Belle</h2>
                        <p className="text-xs uppercase font-semibold">08th january 2020</p>
                    </div>
                </div>

            </div>
            <div className="w-full h-[90vh] px-20  mt-20 flex gap-8">
                <div className="w-1/2">
                    <img src="https://images.unsplash.com/photo-1675261560626-da81bdd02aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbUFMRSUyMHBvcnRyYWl0fGVufDB8fDB8fHww" className="w-full h-[95%] object-cover object-top rounded" />
                </div>
                <div className="w-1/2">
                    <h1 className="font-rubik font-black tracking-tight text-2xl uppercase">movie  shot</h1>
                    <p className="mt-3 font-medium font-poppins tracking-tight">London based Tom Mitchell has <br />a distinct aesthetic within his <br />photography &  moving image</p>
                    <p className="mt-5 font-medium text-sm tracking-tighter font-poppins">Tom's calm nature and eagemess  to create;while still maintaing a high level of  <br />professionalism;has seen him slide into the fashion industry-photographing <br />campaigns,look books,editorials,portraits,short films and TV commercials.</p>
                    <div className="w-full mt-5 flex gap-5">
                        <img src="https://images.unsplash.com/photo-1683849119970-512d8d772e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMHBvc2V8ZW58MHx8MHx8fDA%3D" className="w-1/2 h-80 object-cover object-top rounded" />
                        <img src="https://images.unsplash.com/photo-1667599397813-35121d7abb05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D" className="h-80 w-2/5 object-cover object-top rounded" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[95vh] px-20 py-10">
                <div className="w-full h-full">
                    <img src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww" className="w-full h-full object-cover object-center rounded" />
                </div>
            </div>
            <div className="w-full h-[90vh] px-20">
                <div className="w-full h-full  flex gap-20">
                    <div className="w-1/2 h-full">
                        <img src="https://plus.unsplash.com/premium_photo-1664464229519-f75cfe27375a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww" className="w-full h-full object-cover object-top rounded" />
                    </div>
                    <div className="w-1/2 h-full">
                        <div className="w-4/5 h-4/5">
                            <img src="https://images.unsplash.com/photo-1583167461820-d79d51f89d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover rounded object-top" />
                        </div>
                        <div className="flex gap-5 font-poppins mt-5">
                            <h3 className=" font-medium">"Body" and "No Lie"-90s inspired  R&B sound that is drawing a new comparison to  Dua Lipa </h3>
                            <p className="text-sm px-4">There aren't many 22 year-olds with the introspection  of Icelandic artist Glowie-real   name Sara Petursdottir - but then again, she's  always been  one  for doing her own  thing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-4 mt-14 whitespace-nowrap overflow-x-hidden overflow-y-hidden border-y-[1px] border-black  font-rubik">
                {["premier models 2020", "premier models 2020", "premier models 2020", "premier models 2020", "premier models 2020", "premier models 2020"].map((item, idx) => {
                    return <h2 key={idx} className="uppercase tracking-widest mr-3 text-3xl font-black text textMove">{item}</h2>
                })}
            </div>
            <div className="w-full px-20 flex justify-between mt-8">
                <h1 className="font-rubik font-black text-4xl uppercase">blog</h1>
                <p className="font-medium font-poppins tracking-tight flex gap-2">Jack Thompson features in a story <br />crossing bridges for  ID Magazine shot <br />by Maxwell Tomlinson,styled by Louise <br />Prier Tisdall.</p>
                <p className="font-medium font-poppins tracking-tight">As London Fashion Week has come to <br />an end,we've made a list  of our fresh  new <br />faces & showgirls who have hard walked for <br />some of the biggest designers.</p>
            </div>
            <div className="w-full h-full px-20 flex justify-end my-6">
                <div className="w-3/4 h-full h-40 flex gap-4">
                    <img src="https://images.unsplash.com/photo-1692197393247-c76e1bd8f29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww" className="w-1/2 h-96 object-cover rounded" />
                    <img src="https://images.unsplash.com/photo-1690322631793-de6571e26fc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww" className="object-cover rounded w-1/2 h-96 object-top" />
                </div>
            </div>
            <div className="w-full h-52 border-y-2 border-black flex mb-16">
                <h1 className="premierDesignFooter relative font-rubik border-black h-20 w-[20%] flex justify-center items-center font-black text-[39px] tracking-[-2px]">premier</h1>
                <div className="w-full h-full flex justify-between  font-poppins">
                    <div className="flex gap-20 h-full  w-1/2 justify-end">
                        <h3 className="border-r-2 border-black pr-10 pt-8 font-semibold text-lg tracking-tight">Models</h3>
                        <h3 className="border-r-2 border-black pr-10 pt-8 font-semibold text-lg tracking-tight">Women/Man</h3>
                    </div>
                    <div className="w-1/2 ">
                        <h3 className="font-semibold text-lg tracking-tight pt-8 pl-8">Agency/Blog/Information/Contact us</h3>
                        <div className="w-full border-t-2 border-black mt-5 pl-8 pt-5 flex gap-4 ">
                          {icons.map((item,idx)=>{
                            return  <a href="/"> <item.icon key={idx} className="w-5 h-5 cursor-pointer text-[#333]" /></a>
                          })}
                        </div>
                          <div className="pl-8 mt-4 tracking-tight  font-medium">
                          <p className="text-sm"> <span className="font-semibold mr-1">©</span>All content copyright</p>
                          <p className="text-sm leading-4">PREMIER MODELS inc. 1981-2020 / or their respective <br />owners were indicated</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
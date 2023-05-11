import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { RxHamburgerMenu, RxCaretDown } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
    <header className='flex justify-between items-center'>
    <img className='w-[130px] pl-9' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAb1BMVEX///8AAADu7u7Ozs729vZtbW3Y2Nji4uJfX1+tra3AwMC9vb1paWnq6up1dXVTU1ODg4NZWVkeHh5DQ0NJSUnc3Ny2trZ/f38yMjKhoaGXl5cqKir4+PjT09NkZGSLi4s5OTkYGBinp6ePj48MDAzT8s47AAAEfklEQVR4nO2c6WKiOhhARa3igg7uWlym9f2f8U4SlgABAQPD9J7zC/ggJEeyUjoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQO+YjMq4/u3sGdm/yHNQM721U4bfShneZVma50ft9NzS9G7W82+DVWmed7XTw8ErB24LJXif8rrQzIHvTYtooQTvU5hdb9nYQT9/7SascICDAQ4EOMCBAAc4EOAABwIc4ECAg6YOfKevq0VNEA62ta+6uzf3uzA6XMzni7EpMvkTSbOYyMB4EUdGxqn3cHb01/5x5mnHvFxq87mKXJMD19cz+Yt7ux1fnlWPq1iU2Jsix/zixV0GvNSx1SRznZcsgPhJmQ751D5VJL3G484tF7ACE3Fjo/5f1Rw4zkfqsnkqNosOL/KpPVQku2b02flStwUHziOuS0FGQSLB4OCkIvl1s692i5yj3MFz9aGxVAWSDlx5ZP1bZjppqIdy3/8+f53vW7kd1jPp4Kan9hFWa+HgFN7H3chrDu2WOUu5g40p4OmXeMfULyc6oV3UFs41P9LB0JSccLCK9/YncaKxkW6Npg6SZvQidsNt2cIG6ZA6UzrQO4oY4UBrUmSGivuxNmjqQOsNPpNqL3rvS+ZMtV/ZwWCTNBUdYcHBJXniRURv1sX+Wm5Vd7AtrDVtYcHBKK7BmaqgHKh68hMdaMOqffzrn7Wm4Q+BpqO6g92/6GDqRA3CKu1Ap7qDhxMPITvCQl2Yxi352oaDZ9/6hf0k4Rr22kYHshSbFw7memqRkIyDWd/GB2lGKmB0IFconBcOUkR9qHCwDIaK6bcILawVrxK2HMgVishBMDz+irif5Ul5B+fw8vx8oWMF7TgIpw0KbXxQ+Bxo/L50WxEGL+dM/jphG5bb6ED+PUvsYKwVSq1hSQc7LbVdNKPMODjNjC1nm9jqF+Ss5/OFg8I5U5r7WyWqjy0H8smO+8bgIFms0g4K+8Zo3hiMxOggWXnpBlsOZLaPkYOIr4oOkr4xEM9St0MkGw4m8f5X1sG5tgM1Puh0qGxjrCyLF8SJ6fm/1HewzxjuAAsORA0IX+KIce5okA7VdCBr1sh0Ymu8XxdkHxAOa0SZ9dX/TX0HMvVuF9jfdyDeDzzD7X36EZk5P9pBeIl3OGmPgSrQM9wL5HJCpfFBDxxkUAtjhvcL6ifOvV/QloXDwdHD99efYVBzkEHNGPrpQI3wqztYFqW3OfxfHKRfC+03SWQ66omD8m8+roa8qbpgeOead/B0Z7n0z6EF15NvWZRRwzvXcOZ4c1JfEExfO6j7FUvuHtn0hgZkZFwUGCT7BdPc/ex8XnhR6oX3Gcf30dMRkeJSNvv7g5/3dyg4wAEOcCDAAQ4EOMCBAAc4EOAAB4LmDvr5dXsTmjvYzoro+j13NeZF2T2sGzsoZt1CCd7nozTPth308+uO8v8BgYMmDvx/0EF5XXjUTm8cEsQb8ZbAev5tMC5EZv5vZw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADy/AfrwD8Sd+4AgQAAAABJRU5ErkJggg==' />
    <nav className=''>
        <ul className='hidden sm:hidden md:flex gap-3 text-[13px] font-bold pr-11  '>
            <li className='relative'>Products <RxCaretDown size={20} className='inline-block' />
              </li>
            <li className=''>App and services <RxCaretDown size={20} className='inline-block' /></li>
            <li className=''>Learn <RxCaretDown size={20} className='inline-block' /></li>
            <li className=''>For developers</li>
            <li className=''>Support</li>
            <li className=''>English <RxCaretDown size={20} className='inline-block' /></li>
            <li className=''><RiShoppingCart2Line size={20} /></li>  
        </ul>
        <ul className=''>
          <li className='pr-9'><RxHamburgerMenu className='sm:visible md:hidden' size={20} /></li>
        </ul>
        
        
        
    </nav>
    </header>
    </>
  )
}

export default Navbar


{/* <img className='w-[130px] flexbox justify-start pl-9' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAb1BMVEX///8AAADu7u7Ozs729vZtbW3Y2Nji4uJfX1+tra3AwMC9vb1paWnq6up1dXVTU1ODg4NZWVkeHh5DQ0NJSUnc3Ny2trZ/f38yMjKhoaGXl5cqKir4+PjT09NkZGSLi4s5OTkYGBinp6ePj48MDAzT8s47AAAEfklEQVR4nO2c6WKiOhhARa3igg7uWlym9f2f8U4SlgABAQPD9J7zC/ggJEeyUjoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQO+YjMq4/u3sGdm/yHNQM721U4bfShneZVma50ft9NzS9G7W82+DVWmed7XTw8ErB24LJXif8rrQzIHvTYtooQTvU5hdb9nYQT9/7SascICDAQ4EOMCBAAc4EOAABwIc4ECAg6YOfKevq0VNEA62ta+6uzf3uzA6XMzni7EpMvkTSbOYyMB4EUdGxqn3cHb01/5x5mnHvFxq87mKXJMD19cz+Yt7ux1fnlWPq1iU2Jsix/zixV0GvNSx1SRznZcsgPhJmQ751D5VJL3G484tF7ACE3Fjo/5f1Rw4zkfqsnkqNosOL/KpPVQku2b02flStwUHziOuS0FGQSLB4OCkIvl1s692i5yj3MFz9aGxVAWSDlx5ZP1bZjppqIdy3/8+f53vW7kd1jPp4Kan9hFWa+HgFN7H3chrDu2WOUu5g40p4OmXeMfULyc6oV3UFs41P9LB0JSccLCK9/YncaKxkW6Npg6SZvQidsNt2cIG6ZA6UzrQO4oY4UBrUmSGivuxNmjqQOsNPpNqL3rvS+ZMtV/ZwWCTNBUdYcHBJXniRURv1sX+Wm5Vd7AtrDVtYcHBKK7BmaqgHKh68hMdaMOqffzrn7Wm4Q+BpqO6g92/6GDqRA3CKu1Ap7qDhxMPITvCQl2Yxi352oaDZ9/6hf0k4Rr22kYHshSbFw7memqRkIyDWd/GB2lGKmB0IFconBcOUkR9qHCwDIaK6bcILawVrxK2HMgVishBMDz+irif5Ul5B+fw8vx8oWMF7TgIpw0KbXxQ+Bxo/L50WxEGL+dM/jphG5bb6ED+PUvsYKwVSq1hSQc7LbVdNKPMODjNjC1nm9jqF+Ss5/OFg8I5U5r7WyWqjy0H8smO+8bgIFms0g4K+8Zo3hiMxOggWXnpBlsOZLaPkYOIr4oOkr4xEM9St0MkGw4m8f5X1sG5tgM1Puh0qGxjrCyLF8SJ6fm/1HewzxjuAAsORA0IX+KIce5okA7VdCBr1sh0Ymu8XxdkHxAOa0SZ9dX/TX0HMvVuF9jfdyDeDzzD7X36EZk5P9pBeIl3OGmPgSrQM9wL5HJCpfFBDxxkUAtjhvcL6ifOvV/QloXDwdHD99efYVBzkEHNGPrpQI3wqztYFqW3OfxfHKRfC+03SWQ66omD8m8+roa8qbpgeOead/B0Z7n0z6EF15NvWZRRwzvXcOZ4c1JfEExfO6j7FUvuHtn0hgZkZFwUGCT7BdPc/ex8XnhR6oX3Gcf30dMRkeJSNvv7g5/3dyg4wAEOcCDAAQ4EOMCBAAc4EOAAB4LmDvr5dXsTmjvYzoro+j13NeZF2T2sGzsoZt1CCd7nozTPth308+uO8v8BgYMmDvx/0EF5XXjUTm8cEsQb8ZbAev5tMC5EZv5vZw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADy/AfrwD8Sd+4AgQAAAABJRU5ErkJggg==' />
    <div className='flex justify-end absolute top-11 right-0 py-5 nav '>
        
        <ul className=' hidden md:flex gap-6 pr-8 text-[13px] font-bold'>
            <li className='sm:inline-block'>Products<select></select></li>
            <li className='sm:inline-block'>App and services<select></select></li>
            <li className='sm:inline-block'>Learn<select></select></li>
            <li className='sm:inline-block'>For developers</li>
            <li className='sm:inline-block'>Support</li>
            <li className='sm:inline-block'>English<select></select></li>
            <li className='sm:inline-block'><RiShoppingCart2Line size={20} /></li>
        </ul>
        <ul>
          <li className='p-5 cursor-pointer'><RxHamburgerMenu className='lg:hidden' size={20} /></li>
        </ul>
    </div> */}
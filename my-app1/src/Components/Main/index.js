import './style.css';

const tasks = [
    <div className='item'><p>کار 1</p><span>&#10006;</span></div>,
    <div className='item'><p>کار 2</p><span>&#10006;</span></div>,
    <div className='item'><p>کار 3</p><span>&#10006;</span></div>,
    <div className='item'><p>کار 4</p><span>&#10006;</span></div>,
    <div className='item'><p>کار 5</p><span>&#10006;</span></div>,
    <div className='item'>
        <p>خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی</p>
        <span>&#10006;</span>
    </div>,
    <div className='item'><p>کار 7</p><span>&#10006;</span></div>,
    <div className='item'><p>کار 8</p><span>&#10006;</span></div>,
    <div className='item'><p>کار 9</p><span>&#10006;</span></div>,
    <div className='item'><p>کار 10</p><span>&#10006;</span></div>
]


function Main() {

    return (
        <main className='main'>
            {tasks}
        </main>
    )
}

export default Main
import './Styles.css'

const FloatingPanel = () => {
    return (
        <div className="floating-all">
            <div className="drop-down">
                <div className='select'>
                    <span className='selected bolded'>تخصص الاسنان</span>
                    <div className='caret'></div>
                </div>
                <ul className='menu'>
                    <li>facebook</li>
                    <li>google</li>
                    <li className='active'>twitter</li>
                    <li>apple</li>
                </ul>
            </div>
            <div className="drop-down">
                <div className='select'>
                    <span className='selected faded'>اختر المحافظة</span>
                    <div className='caret'></div>
                </div>
                <ul className='menu'>
                    <li>facebook</li>
                    <li>google</li>
                    <li className='active'>twitter</li>
                    <li>apple</li>
                </ul>
            </div>
            <div className="drop-down">
                <div className='select'>
                    <span className='selected faded'>اختر المنطقة</span>
                    <div className='caret'></div>
                </div>
                <ul className='menu'>
                    <li>messi</li>
                    <li>ronaldo</li>
                    <li className='active'>salah</li>
                    <li>mbappe</li>
                </ul>
            </div>
            <div className="drop-down">
                <div className='select'>
                    <span className='selected faded'>اختر التأمين</span>
                    <div className='caret'></div>
                </div>
                <ul className='menu'>
                    <li>messi</li>
                    <li>ronaldo</li>
                    <li className='active'>salah</li>
                    <li>mbappe</li>
                </ul>
            </div>
            <div className="drop-down">
                <div className='select search'>
                    <span className='selected search'>أبحث</span>
                </div>
            </div>


        </div>
    );
}

export default FloatingPanel;
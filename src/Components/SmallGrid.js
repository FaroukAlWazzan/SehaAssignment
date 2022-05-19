import './Styles.css';

const SmallGrid = () => {
    return (
        <div className='small-grid'>
            <h2>حجز الطبيب</h2>
            <div className='place'>
                <label className='checkbox-label type'>نوع الكشف</label>
                <label class="checkbox-container">كشف اونلاين
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>

                <label class="checkbox-container">كشف بالمنزل
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>

                <label class="checkbox-container">كشف بالعيادة<input type="checkbox" /><span class="checkmark"></span></label>
            </div>
            <br />
            <div className='time'>
                <label className='time-label'>ميعاد الكشف</label>
                <h6>مارس 23</h6>
                <div className='time-blocks'>
                    <div className='time-block'>01:00pm</div>
                    <div className='time-block'>03:00pm</div>
                    <div className='time-block washed-out'>05:00pm</div>
                    <div className='time-block'>07:00pm</div>
                    <div className='time-block'>09:00pm</div>
                    <div className='time-block washed-out'>02:00am</div>
                    <div className='time-block'>04:00am</div>
                    <div className='time-block'>6:00am</div>
                    <div className='time-block washed-out'>8:00am</div>
                    <div className='time-block washed-out'>10:00am</div>
                    <div className='time-block'>11:00am</div>
                    <div className='time-block'>12:00am</div>
                </div>
            </div>
            <button>حجز الطبيب</button>
        </div>
    );
}

export default SmallGrid;
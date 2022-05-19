import './Styles.css';

const DoctorInfo = () => {
    return (
        <div className="doctor-info">
            <div className='doc-portfolio'>
                <img className='pic-itself' alt="" />
            </div>
            <div className='doc-info-card'>
                <div className='doc-info'>
                    <h4>د/ليلاس الشعراني</h4>
                    <p>استشاري زراعة الاسنان والتركيبات وتقويم الاسنان بجامعة هارفرد</p>
                    <div className='stars'>&#9733; &#9733; &#9733; &#9733; &#9734;</div>
                </div>
                <div className='doc-location'>
                    <p>شارع الحر - عمارات الحي - طرابلس - تركيا</p>
                    <p><span className='info-faded'>مواعيد العمل </span>  السبت - الخميس (10am - 5pm)</p>
                    <p><span className='info-faded'>مدة الانتظار</span> 30 دقيقة</p>
                    <p><span className='info-faded'>سعر الكشف</span>  100 ليرة</p>
                </div>

            </div>
        </div>
    );
}

export default DoctorInfo;
import './Styles.css';

const DoctorServices = () => {
    return (
        <div className="doc-services">
            <h3><i class="fa-solid fa-sm fa-stethoscope"></i> خدمات الطبيب</h3>
            <div className="serv-details">
                <div>حشو الاسنان</div>
                <div>تركيبات الاسنان</div>
                <div>تنظيف الاسنان</div>
                <div>تركيب تقويمات</div>
                <div>جراحة الاسنان</div>
                <div>اسنان الاطفال</div>
            </div>
        </div>
    );
}

export default DoctorServices;
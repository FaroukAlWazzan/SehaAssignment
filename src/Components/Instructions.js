import './Styles.css';

const Instructions = () => {
    return (
        <div className="instructions">
            <h3><i class="fa-solid fa-sm fa-microphone"></i>  تعليمات للمرضى</h3>
            <div className="instruct">
                <div>ضرورة الحضور بالكمامة</div>
                <div>اعطاء بيانات المريض كاملة والحفاظ على نظافة المكان</div>
                <div>الدخول للطبيب باسبقية الحضور</div>
                <div>عدم احضار الاطفال</div>
            </div>
        </div>
    );
}

export default Instructions;
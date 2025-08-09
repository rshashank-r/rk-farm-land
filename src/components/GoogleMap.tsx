'use client';

export default function GoogleMap() {
    const lat = 12.470580;
    const lng = 77.234675 ;
    const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.6876198589266!2d77.23348962061056!3d12.47051192874863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe81bda1de9351%3A0xb66bffe88716f0cb!2sRK%20FARM%20LAND!5e0!3m2!1sen!2sin!4v1754758445478!5m2!1sen!2sin`;

    return (
        <div className="w-full h-96 bg-muted flex items-center justify-center rounded-lg overflow-hidden">
            <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RK Farm Land Location"
            ></iframe>
        </div>
    );
}

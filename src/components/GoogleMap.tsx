'use client';

export default function GoogleMap() {
    const lat = 17.729011;
    const lng = 78.254205;
    const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.539213948254!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc94f3458ffffff%3A0x8af5362438521191!2sRK%20Farm%20Lands!5e0!3m2!1sen!2sin!4v1628520978912!5m2!1sen!2sin`;

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

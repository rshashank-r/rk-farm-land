'use client';

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { Sprout } from 'lucide-react';

export default function GoogleMap() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    // Using a placeholder location. Replace with actual coordinates.
    const position = { lat: 12.9716, lng: 77.5946 }; 

    if (!apiKey) {
        return (
            <div className="w-full h-96 bg-muted flex items-center justify-center rounded-lg">
                <p className="text-muted-foreground p-4 text-center">
                    Google Maps cannot be displayed. The API Key is missing.
                    <br />
                    Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file.
                </p>
            </div>
        );
    }

    return (
        <APIProvider apiKey={apiKey}>
            <div className="w-full h-96">
                <Map
                    defaultCenter={position}
                    defaultZoom={9}
                    mapId="rk-farm-land-map"
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >
                    <AdvancedMarker position={position} title={"RK Farm Land (Approx. Location)"}>
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                            <Sprout size={20} />
                        </div>
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    );
}

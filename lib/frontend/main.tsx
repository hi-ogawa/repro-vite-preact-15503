import { h } from 'preact';
import { useMediaQuery } from 'react-responsive';

const ResponsiveComponent = () => {
    const isDesktop = useMediaQuery({ minWidth: 1224 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div>
            {isDesktop && <p>You are on a desktop device.</p>}
            {isTablet && <p>You are on a tablet device.</p>}
            {isMobile && <p>You are on a mobile device.</p>}

            <div>
                {isDesktop ? (
                    <DesktopComponent />
                ) : isTablet ? (
                    <TabletComponent />
                ) : (
                    <MobileComponent />
                )}
            </div>
        </div>
    );
};

const DesktopComponent = () => <div>This is a desktop-specific component.</div>;
const TabletComponent = () => <div>This is a tablet-specific component.</div>;
const MobileComponent = () => <div>This is a mobile-specific component.</div>;

export default ResponsiveComponent;

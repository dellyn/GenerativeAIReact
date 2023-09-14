import SourceSkeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export const Skeleton = (props) => {

    return (
        <SourceSkeleton {...props} baseColor='#c7c7c7' containerClassName={`skeleton ${props.className || ''}`} c />
    );
};

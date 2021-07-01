import './files/gif';
import './files/jpeg';
import './files/jpg';
import './files/png';
import './files/svg';
import './files/webp';
import './files/styles';

declare global {
    namespace Express {
        interface Request {
            /** Logger instance associated with current request */
            logger: () => void;
        }

        interface Response {}
    }
}

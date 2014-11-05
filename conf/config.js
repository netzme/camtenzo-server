/**
 * Created by untung on 16/10/14.
 */
module.exports = function(env) {
    var path = require('path');
    if (env === 'production') {
        return {
            'upload': {
                'pathUpload': path.resolve('assets/upload/')
            },
            'db': {
                'url': "mongodb://localhost/camtenzoDb",
            }
        };
    }
    if (env === 'development') {
       return {
            'upload': {
                'pathUpload': path.resolve('test/uploadImageDir/')
            },
            'db': {
                'url': "mongodb://localhost/camtenzoDbTest",
            }
        }
    }
}
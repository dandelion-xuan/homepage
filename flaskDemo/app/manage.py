from api import signup
from api import login,mind,diary
from server.server import app


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8888,
        debug=True
    )

#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os

class db_config():
    USER = os.getenv('MYSQL_ROOT_USER', default = 'root')
    PASSWORD = os.getenv('MYSQL_ROOT_PASSWORD', default = '123456')
    DATABASE = os.getenv('MYSQL_DATABASE', default = 'homepage')
    HOST = os.getenv('DB_HOST', default = 'localhost')
    # HOST = os.getenv('DB_HOST', default = '95.163.202.160')
    # HOST = os.getenv('DB_HOST', default = '192.168.1.4')
    # HOST = os.getenv('DB_HOST', default = '119.23.231.141')
    PORT = os.getenv('DB_PORT', default = 3306)
    SECRET_KEY = os.getenv('SECRET_KEY',default = 'no_secret')

config = db_config()
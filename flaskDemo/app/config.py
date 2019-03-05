#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os

class db_config():
    USER = os.getenv('MYSQL_ROOT_USER', default = 'root')
    PASSWORD = os.getenv('MYSQL_ROOT_PASSWORD', default = 'root')
    DATABASE = os.getenv('MYSQL_DATABASE', default = 'homepage')
    HOST = os.getenv('DB_HOST', default = '95.163.202.160')
    PORT = os.getenv('DB_PORT', default = 3308)

config = db_config()
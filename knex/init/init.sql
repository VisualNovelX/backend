CREATE ROLE vnx_admin;
CREATE ROLE vnx_ro;
CREATE ROLE vnx_rw;

GRANT ALL PRIVILEGES ON DATABASE vnxdev_db TO vnx_admin;

\connect vnxdev_db;
CREATE SCHEMA vnx_dev;
GRANT ALL PRIVILEGES ON SCHEMA vnx_dev TO vnx_admin;

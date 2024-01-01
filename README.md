# Start Postgresql Container

docker login
docker pull postgres <-- Optional (download image)
docker run --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=topsecret -d posgres (downlaods image if not exists)

docker ps <-- check status


COPY .. <-- Copy all from the source folder to the working directory from the cotainer
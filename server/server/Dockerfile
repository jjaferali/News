FROM microsoft/aspnetcore-build:latest AS build-env
WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM microsoft/aspnetcore:latest
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "server.dll"]

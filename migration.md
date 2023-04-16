npx sequelize-cli model:generate --name Company --attributes name:string,description:string,website:string,phone:string,deleted_at:date

npx sequelize-cli model:generate --name Plant --attributes name:string,description:string,address:string,phone:string,deleted_at:date

npx sequelize-cli model:generate --name Division --attributes name:string,description:string,deleted_at:date

npx sequelize-cli model:generate --name Department --attributes name:string,description:string,deleted_at:date,division_id:integer

npx sequelize-cli model:generate --name Line --attributes name:string,description:string,code:string,deleted_at:date,division_id:integer,department_id:integer

npx sequelize-cli model:generate --name Shop --attributes name:string,description:string,deleted_at:date,division_id:integer,department_id:integer,line_id:integer

npx sequelize-cli model:generate --name Cell --attributes name:string,description:string,deleted_at:date,division_id:integer,department_id:integer,line_id:integer,shop_id:integer

npx sequelize-cli model:generate --name TypeMachine --attributes name:string,description:string

npx sequelize-cli model:generate --name Machine --attributes name:string,description:string,operation_number:string,sn:string,process_name:string,maker:string,type_id:integer,release_year:integer,division_id:integer,department_id:integer,line_id:integer

npx sequelize-cli model:generate --name SpecialTool --attributes uuid:string,code:string,name:string,description:string,status:string,is_available:boolean

npx sequelize-cli model:generate --name SubMachine --attributes uuid:string,code:string,name:string,description:string,machine_id:integer,company_id:integer,plant_id:integer,division_id:integer,department_id:integer,line_id:integer,cell_id:integer

npx sequelize-cli model:generate --name Jis --attributes uuid:string,number:string,title:string,description:string,machine_id:integer,company_id:integer,plant_id:integer,division_id:integer,department_id:integer,line_id:integer,cell_id:integer

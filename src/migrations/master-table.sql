CREATE TABLE
    tb_m_user(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        username varchar(255),
        password varchar(255),
        phone varchar(255),
        position_id BIGINT,
        company_id BIGINT,
        plant_id BIGINT,
        role_id BIGINT,
        created_by BIGINT,
        deletedAt BIGINT,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_position(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        code varchar(255),
        name varchar(255),
        description varchar(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_role_user(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        user_id BIGINT,
        role_id BIGINT,
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_role(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_company(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        phone VARCHAR(13),
        website VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_plant(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        company_id BIGINT,
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        phone VARCHAR(13),
        address VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_division(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        company_id BIGINT,
        plant_id BIGINT,
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_department(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        company_id BIGINT,
        plant_id BIGINT,
        division_id BIGINT,
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_line(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        company_id BIGINT,
        plant_id BIGINT,
        division_id BIGINT,
        department_id BIGINT,
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_cell(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        company_id BIGINT,
        plant_id BIGINT,
        division_id BIGINT,
        department_id BIGINT,
        line_id BIGINT,
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_shop(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        company_id BIGINT,
        plant_id BIGINT,
        division_id BIGINT,
        department_id BIGINT,
        line_id BIGINT,
        cell_id BIGINT,
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_product_type(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_machine_type(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_machine(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        company_id BIGINT,
        plant_id BIGINT,
        division_id BIGINT,
        department_id BIGINT,
        line_id BIGINT,
        cell_id BIGINT,
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        pic VARCHAR(255),
        operation_number VARCHAR(255),
        serial_number VARCHAR(255),
        process_name VARCHAR(255),
        release_year VARCHAR(255),
        maker VARCHAR(255),
        machine_type_id BIGINT,
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_sub_machine(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        company_id BIGINT,
        plant_id BIGINT,
        division_id BIGINT,
        department_id BIGINT,
        line_id BIGINT,
        cell_id BIGINT,
        machine_id BIGINT,
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_jis(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        number VARCHAR(255),
        title VARCHAR(255),
        special_tool_id BIGINT,
        description VARCHAR(255),
        file_url VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_ledger_method(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_special_tool(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        code VARCHAR(255),
        name VARCHAR(255),
        is_available BIT,
        status VARCHAR(255),
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );

CREATE TABLE
    tb_m_spare_part(
        id BIGINT NOT NULL primary key IDENTITY(1, 1),
        uuid VARCHAR(255),
        number VARCHAR(255),
        name VARCHAR(255),
        price_per_unit BIGINT,
        stock BIGINT,
        description VARCHAR(255),
        created_by BIGINT,
        deletedAt DATETIME,
        createdAt DATETIME,
        updatedAt DATETIME,
    );
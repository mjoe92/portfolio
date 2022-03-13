package com.pcd.server.config;

import org.springframework.context.annotation.Configuration;

/**
 * Configuration for Flyway.
 */
@Configuration
public class FlywayConfig {

//    /**
//     * Initializes the {@link Flyway} Bean for developer stages.
//     *
//     * @param dataSource
//     *            The {@link DataSource}.
//     * @param schema
//     *            The schema (== username).
//     * @return The initialized {@link Flyway} Bean.
//     */
//    @Bean(name = "flyway", initMethod = "migrate", autowireCandidate = false)
//    @Profile({ "default", "localhost", "jubula", "jubula-dev" })
//    @DependsOn("connectionTester")
//    public Flyway flywayDev(DataSource dataSource, @Value("${datasource.username}") String schema) {
//        return flywayBase(dataSource, schema, "db/migration", "db/testdata", "db/oracle_xe");
//    }
//
//    /**
//     * Initializes the {@link Flyway} Bean for vw stages.
//     *
//     * @param dataSource
//     *            The {@link DataSource}.
//     * @param schema
//     *            The schema (== username).
//     * @return The initialized {@link Flyway} Bean.
//     */
//    @Bean(name = "flyway", initMethod = "migrate", autowireCandidate = false)
//    @Profile({ "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "ti-bug", "ti-ha", "ti-nightly", "ti-schul", "qs-bug", "qs-ha",
//            "qs-nightly", "prod-ha" })
//    @DependsOn("connectionTester")
//    public Flyway flywayVw(DataSource dataSource, @Value("${datasource.username}") String schema) {
//        return flywayBase(dataSource, schema, "db/migration", "db/cognos", "db/oracle_ee");
//    }
//
//    /**
//     * Creates the {@link Flyway} Base Bean.
//     *
//     * @param dataSource
//     *            The {@link DataSource}.
//     * @param schema
//     *            The schema.
//     * @param locations
//     *            the locations of the migration scripts.
//     * @return The initialized {@link Flyway} Bean.
//     */
//    private Flyway flywayBase(DataSource dataSource, String schema, String... locations) {
//        ClassicConfiguration config = new ClassicConfiguration();
//        config.setDataSource(dataSource);
//        config.setOutOfOrder(true);
//        config.setSqlMigrationPrefix("");
//        config.setLocationsAsStrings(locations);
//        config.setTable("schema_version");
//        config.setValidateOnMigrate(true);
//        config.setSchemas(new String[] { schema });
//        config.setCallbacks(new GrantSelectOnAllTablesAndViewsToReadOnlyUserAfterMigrateCallback(),
//                new CreateAndMoveIndexes());
//
//        return new Flyway(config);
//    }

}

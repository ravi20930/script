var DataTypes = require("sequelize").DataTypes;
var _alembic_version = require("./alembic_version");
var _auditor_anomaly_audit = require("./auditor_anomaly_audit");
var _auditor_assets = require("./auditor_assets");
var _auditor_notifications = require("./auditor_notifications");
var _auditor_tbl_chainage = require("./auditor_tbl_chainage");
var _auditor_test_anomaly = require("./auditor_test_anomaly");
var _auditor_users = require("./auditor_users");
var _auditor_video_uploads = require("./auditor_video_uploads");
var _tbl_asset = require("./tbl_asset");
var _tbl_asset_status = require("./tbl_asset_status");
var _tbl_asset_type = require("./tbl_asset_type");
var _tbl_direction = require("./tbl_direction");
var _tbl_org_asset = require("./tbl_org_asset");
var _tbl_organisation = require("./tbl_organisation");
var _tbl_permissions = require("./tbl_permissions");
var _tbl_roles = require("./tbl_roles");
var _tbl_site = require("./tbl_site");
var _tbl_site_anomaly = require("./tbl_site_anomaly");
var _tbl_site_asset = require("./tbl_site_asset");
var _tbl_site_statics = require("./tbl_site_statics");
var _tbl_user = require("./tbl_user");
var _tbl_user_permissions = require("./tbl_user_permissions");
var _tbl_user_roles = require("./tbl_user_roles");
var _tbl_user_sessions = require("./tbl_user_sessions");
var _tbl_user_sites = require("./tbl_user_sites");
var _tbl_user_team = require("./tbl_user_team");
var _local_gui_error_log = require("./local_gui_error_log");
var _local_gui_access_log = require("./local_gui_access_log");

function initModels(sequelize) {
  var alembic_version = _alembic_version(sequelize, DataTypes);
  var auditor_anomaly_audit = _auditor_anomaly_audit(sequelize, DataTypes);
  var auditor_assets = _auditor_assets(sequelize, DataTypes);
  var auditor_notifications = _auditor_notifications(sequelize, DataTypes);
  var auditor_tbl_chainage = _auditor_tbl_chainage(sequelize, DataTypes);
  var auditor_test_anomaly = _auditor_test_anomaly(sequelize, DataTypes);
  var auditor_users = _auditor_users(sequelize, DataTypes);
  var auditor_video_uploads = _auditor_video_uploads(sequelize, DataTypes);
  var tbl_asset = _tbl_asset(sequelize, DataTypes);
  var tbl_asset_status = _tbl_asset_status(sequelize, DataTypes);
  var tbl_asset_type = _tbl_asset_type(sequelize, DataTypes);
  var tbl_direction = _tbl_direction(sequelize, DataTypes);
  var tbl_org_asset = _tbl_org_asset(sequelize, DataTypes);
  var tbl_organisation = _tbl_organisation(sequelize, DataTypes);
  var tbl_permissions = _tbl_permissions(sequelize, DataTypes);
  var tbl_roles = _tbl_roles(sequelize, DataTypes);
  var tbl_site = _tbl_site(sequelize, DataTypes);
  var tbl_site_anomaly = _tbl_site_anomaly(sequelize, DataTypes);
  var tbl_site_asset = _tbl_site_asset(sequelize, DataTypes);
  var tbl_site_statics = _tbl_site_statics(sequelize, DataTypes);
  var tbl_user = _tbl_user(sequelize, DataTypes);
  var tbl_user_permissions = _tbl_user_permissions(sequelize, DataTypes);
  var tbl_user_roles = _tbl_user_roles(sequelize, DataTypes);
  var tbl_user_sessions = _tbl_user_sessions(sequelize, DataTypes);
  var tbl_user_sites = _tbl_user_sites(sequelize, DataTypes);
  var tbl_user_team = _tbl_user_team(sequelize, DataTypes);
  var local_gui_error_log = _local_gui_error_log(sequelize, DataTypes);
  var local_gui_access_log = _local_gui_access_log(sequelize, DataTypes);


  tbl_org_asset.belongsTo(tbl_asset, { as: "asset", foreignKey: "asset_id"});
  tbl_asset.hasMany(tbl_org_asset, { as: "tbl_org_assets", foreignKey: "asset_id"});
  tbl_site_anomaly.belongsTo(tbl_asset, { as: "asset", foreignKey: "asset_id"});
  tbl_asset.hasMany(tbl_site_anomaly, { as: "tbl_site_anomalies", foreignKey: "asset_id"});
  tbl_site_asset.belongsTo(tbl_asset, { as: "asset", foreignKey: "asset_id"});
  tbl_asset.hasMany(tbl_site_asset, { as: "tbl_site_assets", foreignKey: "asset_id"});
  tbl_site_anomaly.belongsTo(tbl_asset_status, { as: "current_status_tbl_asset_status", foreignKey: "current_status"});
  tbl_asset_status.hasMany(tbl_site_anomaly, { as: "tbl_site_anomalies", foreignKey: "current_status"});
  tbl_site_asset.belongsTo(tbl_asset_status, { as: "current_status_tbl_asset_status", foreignKey: "current_status"});
  tbl_asset_status.hasMany(tbl_site_asset, { as: "tbl_site_assets", foreignKey: "current_status"});
  tbl_asset.belongsTo(tbl_asset_type, { as: "asset_type_tbl_asset_type", foreignKey: "asset_type"});
  tbl_asset_type.hasMany(tbl_asset, { as: "tbl_assets", foreignKey: "asset_type"});
  tbl_site_asset.belongsTo(tbl_asset_type, { as: "asset_type_tbl_asset_type", foreignKey: "asset_type"});
  tbl_asset_type.hasMany(tbl_site_asset, { as: "tbl_site_assets", foreignKey: "asset_type"});
  tbl_site.belongsTo(tbl_direction, { as: "direction_tbl_direction", foreignKey: "direction"});
  tbl_direction.hasMany(tbl_site, { as: "tbl_sites", foreignKey: "direction"});
  tbl_site_anomaly.belongsTo(tbl_direction, { as: "lhs_rhs_tbl_direction", foreignKey: "lhs_rhs"});
  tbl_direction.hasMany(tbl_site_anomaly, { as: "tbl_site_anomalies", foreignKey: "lhs_rhs"});
  tbl_site_asset.belongsTo(tbl_direction, { as: "lhs_rhs_tbl_direction", foreignKey: "lhs_rhs"});
  tbl_direction.hasMany(tbl_site_asset, { as: "tbl_site_assets", foreignKey: "lhs_rhs"});
  tbl_org_asset.belongsTo(tbl_organisation, { as: "org", foreignKey: "org_id"});
  tbl_organisation.hasMany(tbl_org_asset, { as: "tbl_org_assets", foreignKey: "org_id"});
  tbl_site.belongsTo(tbl_organisation, { as: "org", foreignKey: "org_id"});
  tbl_organisation.hasMany(tbl_site, { as: "tbl_sites", foreignKey: "org_id"});
  tbl_site_statics.belongsTo(tbl_organisation, { as: "org", foreignKey: "org_id"});
  tbl_organisation.hasMany(tbl_site_statics, { as: "tbl_site_statics", foreignKey: "org_id"});
  tbl_user.belongsTo(tbl_organisation, { as: "org", foreignKey: "org_id"});
  tbl_organisation.hasMany(tbl_user, { as: "tbl_users", foreignKey: "org_id"});
  tbl_user_permissions.belongsTo(tbl_permissions, { as: "permission", foreignKey: "permission_id"});
  tbl_permissions.hasMany(tbl_user_permissions, { as: "tbl_user_permissions", foreignKey: "permission_id"});
  tbl_user_roles.belongsTo(tbl_roles, { as: "role", foreignKey: "role_id"});
  tbl_roles.hasMany(tbl_user_roles, { as: "tbl_user_roles", foreignKey: "role_id"});
  tbl_site_anomaly.belongsTo(tbl_site, { as: "site", foreignKey: "site_id"});
  tbl_site.hasMany(tbl_site_anomaly, { as: "tbl_site_anomalies", foreignKey: "site_id"});
  tbl_site_asset.belongsTo(tbl_site, { as: "site", foreignKey: "site_id"});
  tbl_site.hasMany(tbl_site_asset, { as: "tbl_site_assets", foreignKey: "site_id"});
  tbl_site_statics.belongsTo(tbl_site, { as: "site", foreignKey: "site_id"});
  tbl_site.hasMany(tbl_site_statics, { as: "tbl_site_statics", foreignKey: "site_id"});
  tbl_user_sites.belongsTo(tbl_site, { as: "site", foreignKey: "site_id"});
  tbl_site.hasMany(tbl_user_sites, { as: "tbl_user_sites", foreignKey: "site_id"});
  tbl_site_anomaly.belongsTo(tbl_site_asset, { as: "master", foreignKey: "master_id"});
  tbl_site_asset.hasMany(tbl_site_anomaly, { as: "tbl_site_anomalies", foreignKey: "master_id"});
  tbl_user_permissions.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_user_permissions, { as: "tbl_user_permissions", foreignKey: "user_id"});
  tbl_user_roles.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_user_roles, { as: "tbl_user_roles", foreignKey: "user_id"});
  tbl_user_sessions.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_user_sessions, { as: "tbl_user_sessions", foreignKey: "user_id"});
  tbl_user_sites.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_user_sites, { as: "tbl_user_sites", foreignKey: "user_id"});
  tbl_user_team.belongsTo(tbl_user, { as: "team_admin", foreignKey: "team_admin_id"});
  tbl_user.hasMany(tbl_user_team, { as: "tbl_user_teams", foreignKey: "team_admin_id"});
  tbl_user_team.belongsTo(tbl_user, { as: "team_user", foreignKey: "team_user_id"});
  tbl_user.hasMany(tbl_user_team, { as: "team_user_tbl_user_teams", foreignKey: "team_user_id"});

  return {
    alembic_version,
    auditor_anomaly_audit,
    auditor_assets,
    auditor_notifications,
    auditor_tbl_chainage,
    auditor_test_anomaly,
    auditor_users,
    auditor_video_uploads,
    tbl_asset,
    tbl_asset_status,
    tbl_asset_type,
    tbl_direction,
    tbl_org_asset,
    tbl_organisation,
    tbl_permissions,
    tbl_roles,
    tbl_site,
    tbl_site_anomaly,
    tbl_site_asset,
    tbl_site_statics,
    tbl_user,
    tbl_user_permissions,
    tbl_user_roles,
    tbl_user_sessions,
    tbl_user_sites,
    tbl_user_team,
    local_gui_error_log,
    local_gui_access_log
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

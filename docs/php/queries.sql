USE DATABASE math;

CREATE TABLE `math`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `level` INT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `math`.`user` (`id`, `name`, `level`) VALUES ('Alice', 1);
INSERT INTO `math`.`user` (`name`, `level`) VALUES ('Bob', 2);
INSERT INTO `math`.`user` (`name`, `level`) VALUES ('Cindy', 3);

SELECT id,name,level FROM user WHERE (name = 'alice');
SELECT * FROM math.user;
INSERT INTO user (name, level) VALUES ('Diane', 3);
DELETE FROM user WHERE (id = 5);
UPDATE user SET level = 2 WHERE id = 2;
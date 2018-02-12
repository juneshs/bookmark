

INSERT INTO poc (id, name)
SELECT x.id, 'Search POC #' || x.id
  FROM generate_series(1,4000) AS x(id);


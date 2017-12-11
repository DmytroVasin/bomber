export const findFrom = function(id, entities) {
  for (let entity of entities.children) {
    if (entity.id !== id) { continue }

    return entity
  }
  return null;
}

export const findAndDestroyFrom = function(id, entities) {
  let entity = findFrom(id, entities);
  if (!entity) { return }

  entity.destroy()
}

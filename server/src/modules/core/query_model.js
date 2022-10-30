export default (mongooseInstance) => {
  return {
    populate: (fields) => {
      if (fields) {
        const splittedByComma = fields.split(',');
        const splittedBySpace = fields.split(' ');

        const populateFields = splittedByComma.length
          ? splittedByComma
          : splittedBySpace;

        populateFields.forEach((field) => {
          const populate = {};
          const [parent, child] = field.split('.');
  
          if (child) {
            populate.path = parent;
            populate.populate = {
              path: child
            };
          } else {
            populate.path = parent;
          }
  
          mongooseInstance.populate(populate);
        });
      }
    },
    select: (fields) => {
      if (fields) {
        mongooseInstance.select(fields.replace(/,/ug, ' '));
      }
    },
    paginate: (page, size) => {
      if (page && size) {
        mongooseInstance.skip((page - 1) * size);
        mongooseInstance.limit(size);
      }
    },
    sort: (sort) => {
      if (sort) {
        mongooseInstance.sort(sort.replace(/,/ug, ' '));
      }
    }
  };
};



// Agency Busniss
// import React from "react";

// const HIDDEN_KEY = "hiddenAgencyIds";
// const REMOVED_KEY = "removedAgencyIds";
// const HIDDEN_BUSINESS_KEY = "hiddenBusinessIds";
// const REMOVED_BUSINESS_KEY = "removedBusinessIds";

// // Agency Functions
// export const getHiddenIds = () => {
//   try {
//     return JSON.parse(localStorage.getItem(HIDDEN_KEY)) || {};
//   } catch {
//     return {};
//   }
// };

// export const markHiddenId = (id) => {
//   const hidden = getHiddenIds();
//   hidden[id] = true;
//   localStorage.setItem(HIDDEN_KEY, JSON.stringify(hidden));
//   return hidden;
// };

// export const unmarkHiddenId = (id) => {
//   const hidden = getHiddenIds();
//   delete hidden[id];
//   localStorage.setItem(HIDDEN_KEY, JSON.stringify(hidden));
//   return hidden;
// };

// export const getRemovedIds = () => {
//   try {
//     return JSON.parse(localStorage.getItem(REMOVED_KEY)) || {};
//   } catch {
//     return {};
//   }
// };

// export const markRemovedId = (id) => {
//   const removed = getRemovedIds();
//   removed[id] = true;
//   localStorage.setItem(REMOVED_KEY, JSON.stringify(removed));
//   return removed;
// };

// export const unmarkRemovedId = (id) => {
//   const removed = getRemovedIds();
//   delete removed[id];
//   localStorage.setItem(REMOVED_KEY, JSON.stringify(removed));
//   return removed;
// };

// // Business Functions
// export const getHiddenBusinessIds = () => {
//   try {
//     return JSON.parse(localStorage.getItem(HIDDEN_BUSINESS_KEY)) || {};
//   } catch {
//     return {};
//   }
// };

// export const markHiddenBusinessId = (id) => {
//   const hidden = getHiddenBusinessIds();
//   hidden[id] = true;
//   localStorage.setItem(HIDDEN_BUSINESS_KEY, JSON.stringify(hidden));
//   return hidden;
// };

// export const unmarkHiddenBusinessId = (id) => {
//   const hidden = getHiddenBusinessIds();
//   delete hidden[id];
//   localStorage.setItem(HIDDEN_BUSINESS_KEY, JSON.stringify(hidden));
//   return hidden;
// };

// export const getRemovedBusinessIds = () => {
//   try {
//     return JSON.parse(localStorage.getItem(REMOVED_BUSINESS_KEY)) || {};
//   } catch {
//     return {};
//   }
// };

// export const markRemovedBusinessId = (id) => {
//   const removed = getRemovedBusinessIds();
//   removed[id] = true;
//   localStorage.setItem(REMOVED_BUSINESS_KEY, JSON.stringify(removed));
//   return removed;
// };

// export const unmarkRemovedBusinessId = (id) => {
//   const removed = getRemovedBusinessIds();
//   delete removed[id];
//   localStorage.setItem(REMOVED_BUSINESS_KEY, JSON.stringify(removed));
//   return removed;
// };

// // Custom hooks
// export const useSyncHiddenRemoved = (type = 'agency') => {
//   const [hiddenIds, setHiddenIds] = React.useState(
//     type === 'agency' ? getHiddenIds() : getHiddenBusinessIds()
//   );
//   const [removedIds, setRemovedIds] = React.useState(
//     type === 'agency' ? getRemovedIds() : getRemovedBusinessIds()
//   );

//   React.useEffect(() => {
//     const handleStorageChange = () => {
//       setHiddenIds(type === 'agency' ? getHiddenIds() : getHiddenBusinessIds());
//       setRemovedIds(type === 'agency' ? getRemovedIds() : getRemovedBusinessIds());
//     };

//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [type]);

//   return { hiddenIds, removedIds };
// };







// 31-07-25
// src/utils/dashboardState.js
import React from "react";

// Keys for localStorage
const HIDDEN_AGENCY_KEY = "hiddenAgencyIds";
const REMOVED_AGENCY_KEY = "removedAgencyIds";
const HIDDEN_BUSINESS_KEY = "hiddenBusinessIds";
const REMOVED_BUSINESS_KEY = "removedBusinessIds";
const HIDDEN_REQUIREMENT_KEY = "hiddenRequirementIds";
const REMOVED_REQUIREMENT_KEY = "removedRequirementIds";
const HIDDEN_MANPOWER_KEY = "hiddenManpowerIds";
const REMOVED_MANPOWER_KEY = "removedManpowerIds";

// Agency Functions (keeping original names used in StatusDashboard.jsx)
export const getHiddenIds = () => {
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_AGENCY_KEY)) || {};
  } catch {
    return {};
  }
};

export const markHiddenId = (id) => {
  const hidden = getHiddenIds();
  hidden[id] = true;
  localStorage.setItem(HIDDEN_AGENCY_KEY, JSON.stringify(hidden));
  return hidden;
};

export const unmarkHiddenId = (id) => {
  const hidden = getHiddenIds();
  delete hidden[id];
  localStorage.setItem(HIDDEN_AGENCY_KEY, JSON.stringify(hidden));
  return hidden;
};

export const getRemovedIds = () => {
  try {
    return JSON.parse(localStorage.getItem(REMOVED_AGENCY_KEY)) || {};
  } catch {
    return {};
  }
};

export const markRemovedId = (id) => {
  const removed = getRemovedIds();
  removed[id] = true;
  localStorage.setItem(REMOVED_AGENCY_KEY, JSON.stringify(removed));
  return removed;
};

export const unmarkRemovedId = (id) => {
  const removed = getRemovedIds();
  delete removed[id];
  localStorage.setItem(REMOVED_AGENCY_KEY, JSON.stringify(removed));
  return removed;
};

// Business Functions (keeping original names)
export const getHiddenBusinessIds = () => {
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_BUSINESS_KEY)) || {};
  } catch {
    return {};
  }
};

export const markHiddenBusinessId = (id) => {
  const hidden = getHiddenBusinessIds();
  hidden[id] = true;
  localStorage.setItem(HIDDEN_BUSINESS_KEY, JSON.stringify(hidden));
  return hidden;
};

export const unmarkHiddenBusinessId = (id) => {
  const hidden = getHiddenBusinessIds();
  delete hidden[id];
  localStorage.setItem(HIDDEN_BUSINESS_KEY, JSON.stringify(hidden));
  return hidden;
};

export const getRemovedBusinessIds = () => {
  try {
    return JSON.parse(localStorage.getItem(REMOVED_BUSINESS_KEY)) || {};
  } catch {
    return {};
  }
};

export const markRemovedBusinessId = (id) => {
  const removed = getRemovedBusinessIds();
  removed[id] = true;
  localStorage.setItem(REMOVED_BUSINESS_KEY, JSON.stringify(removed));
  return removed;
};

export const unmarkRemovedBusinessId = (id) => {
  const removed = getRemovedBusinessIds();
  delete removed[id];
  localStorage.setItem(REMOVED_BUSINESS_KEY, JSON.stringify(removed));
  return removed;
};

// Requirements Functions
export const getHiddenRequirementIds = () => {
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_REQUIREMENT_KEY)) || {};
  } catch {
    return {};
  }
};

export const markHiddenRequirementId = (id) => {
  const hidden = getHiddenRequirementIds();
  hidden[id] = true;
  localStorage.setItem(HIDDEN_REQUIREMENT_KEY, JSON.stringify(hidden));
  return hidden;
};

export const unmarkHiddenRequirementId = (id) => {
  const hidden = getHiddenRequirementIds();
  delete hidden[id];
  localStorage.setItem(HIDDEN_REQUIREMENT_KEY, JSON.stringify(hidden));
  return hidden;
};

export const getRemovedRequirementIds = () => {
  try {
    return JSON.parse(localStorage.getItem(REMOVED_REQUIREMENT_KEY)) || {};
  } catch {
    return {};
  }
};

export const markRemovedRequirementId = (id) => {
  const removed = getRemovedRequirementIds();
  removed[id] = true;
  localStorage.setItem(REMOVED_REQUIREMENT_KEY, JSON.stringify(removed));
  return removed;
};

export const unmarkRemovedRequirementId = (id) => {
  const removed = getRemovedRequirementIds();
  delete removed[id];
  localStorage.setItem(REMOVED_REQUIREMENT_KEY, JSON.stringify(removed));
  return removed;
};

// Manpower Functions
export const getHiddenManpowerIds = () => {
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_MANPOWER_KEY)) || {};
  } catch {
    return {};
  }
};

export const markHiddenManpowerId = (id) => {
  const hidden = getHiddenManpowerIds();
  hidden[id] = true;
  localStorage.setItem(HIDDEN_MANPOWER_KEY, JSON.stringify(hidden));
  return hidden;
};

export const unmarkHiddenManpowerId = (id) => {
  const hidden = getHiddenManpowerIds();
  delete hidden[id];
  localStorage.setItem(HIDDEN_MANPOWER_KEY, JSON.stringify(hidden));
  return hidden;
};

export const getRemovedManpowerIds = () => {
  try {
    return JSON.parse(localStorage.getItem(REMOVED_MANPOWER_KEY)) || {};
  } catch {
    return {};
  }
};

export const markRemovedManpowerId = (id) => {
  const removed = getRemovedManpowerIds();
  removed[id] = true;
  localStorage.setItem(REMOVED_MANPOWER_KEY, JSON.stringify(removed));
  return removed;
};

export const unmarkRemovedManpowerId = (id) => {
  const removed = getRemovedManpowerIds();
  delete removed[id];
  localStorage.setItem(REMOVED_MANPOWER_KEY, JSON.stringify(removed));
  return removed;
};

// Custom hooks
export const useSyncHiddenRemoved = (type = 'agency') => {
  const getHiddenIdsFn = () => {
    switch (type) {
      case 'agency': return getHiddenIds();
      case 'business': return getHiddenBusinessIds();
      case 'requirement': return getHiddenRequirementIds();
      case 'manpower': return getHiddenManpowerIds();
      default: return {};
    }
  };

  const getRemovedIdsFn = () => {
    switch (type) {
      case 'agency': return getRemovedIds();
      case 'business': return getRemovedBusinessIds();
      case 'requirement': return getRemovedRequirementIds();
      case 'manpower': return getRemovedManpowerIds();
      default: return {};
    }
  };

  const [hiddenIds, setHiddenIds] = React.useState(getHiddenIdsFn());
  const [removedIds, setRemovedIds] = React.useState(getRemovedIdsFn());

  React.useEffect(() => {
    const handleStorageChange = () => {
      setHiddenIds(getHiddenIdsFn());
      setRemovedIds(getRemovedIdsFn());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [type]);

  return { hiddenIds, removedIds };
};
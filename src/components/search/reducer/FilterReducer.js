
export default function FilterReducer(state, action) {
    switch (action.type) {
      case 'search':
        return {...state, search: action?.payload || ''};
      case 'filter':
        return {...state, filter: action?.payload || 'all'};
    case 'domain':
        return {...state, domain: action?.payload || []};
    case 'company':
        return {...state, company: action?.payload || undefined};
    case 'location':
        return {...state, location: action?.payload || undefined};
      default:
        throw new Error();
    }
}
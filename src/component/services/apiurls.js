

const API_URLS={
    saveSentEmail:{
        endpoint:'save',
        method:'POST'
    },
    getEmailFromType: {
        endpoint:'emails',
        method:'GET'
    },
    saveDraftEmails: {
        endpoint: 'save-draft',
        method: 'POST'
    },
    moveEmailsToBin:{
        endpoint:'bin',
        method:'POST'
    },
    toggleStarredEmail:{
        endpoint: 'starred',
        method:'POST'
    },

    deleteEmails:{
        endpoint:'delete',
        method:'DELETE'
    }
}



export default API_URLS;

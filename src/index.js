const EasyDateFormatter = {

    describeformat(date) {
        const now = new Date();
        const differnceinseconds = Math.floor((date - now) / 1000);
        const absolutevalue = Math.abs(differnceinseconds);

        const unitoftime = [
            { units: 'Year', seconds: 31556926 },
            { units: 'Month', seconds: 2629744 },
            { units: 'Week', seconds: 604800 },
            { units: 'Day', seconds: 86400 },
            { units: 'Hour', seconds: 3600 },
            { units: 'Minute', seconds: 60 }
        ]

        for (const { units, seconds } of unitoftime) {
            const interval = Math.round(absolutevalue / seconds);
            if (interval >= 1) {
                const addplural = interval > 1 ? 's' : '';
                return differnceinseconds > 0 ? `in ${interval} ${units}${addplural}` : `${interval} ${units}${addplural} ago`
            }
        }

        return absolutevalue < 60
            ? differnceinseconds > 0 ? 'in a few seconds' : 'just now' : '';
    },


    epoch(epochdate) {
        const date = new Date(epochdate * 1000);
        return date.toLocaleString();
    },

    epochreadableformat(epochdate) {
        const nowdate = new Date(epochdate * 1000);
        const date = new Date();
        const differnceinseconds = Math.floor((nowdate - date) / 1000);
        const absolutevalue = Math.abs(differnceinseconds);

        const unitoftime = [
            { units: 'Year', seconds: 31556926 },
            { units: 'Month', seconds: 2629744 },
            { units: 'Week', seconds: 604800 },
            { units: 'Day', seconds: 86400 },
            { units: 'Hour', seconds: 3600 },
            { units: 'Minute', seconds: 60 }
        ]

        for (const { units, seconds } of unitoftime) {
            const interval = Math.round(absolutevalue / seconds);
            if (interval >= 1) {
                const addplural = interval > 1 ? 's' : '';
                return differnceinseconds > 0 ? `in ${interval} ${units}${addplural}` : `${interval} ${units}${addplural} ago`
            }
        }

        return absolutevalue < 60
            ? differnceinseconds > 0 ? 'in a few seconds' : 'just now' : '';
    }
}



module.exports = EasyDateFormatter;

// app/models/fanpage.js
// load dependencies
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// define the model schema
var fanpageSchema = mongoose.Schema({
    facebook: {
        id: String,
        name: String,
        about: String,
        description: String,
        picture: String,
        category: String,
        category_list: [{
            id: String,
            name: String
        }],
        is_verified: Boolean,
        link: String,
        website: String,
        emails: [String],
        stats: {
            checkins: Number,
            likes: Number,
            talking_about_count: Number,
            were_here_count: Number
        },
        place: {
            name_with_location_descriptor: String,
            phone: String,
            location: {
                street: String,
                city: String,
                state: String,
                country: String,
                zip: String,
                coordinates: {type: [], index: '2d'}
            },
            parking: {
                lot: Number,
                street: Number,
                valet: Number
            }
        },
        info: {
            general_info: String,
            hours: [String],
            impressum: String,
            band: {
                band_members: String,
                booking_agent: String,
                press_contact: String,
                hometown: String,
                record_label: String
            },
            company: {
                company_overview: String,
                founded: String,
                mission: String
            },
            film: {
                directed_by: String
            },
            foodnight: {
                attire: String,
                general_manager: String,
                price_range: String,
                restaurant: {
                    services: {
                        kids: Boolean,
                        delivery: Boolean,
                        walkins: Boolean,
                        catering: Boolean,
                        reserve: Boolean,
                        groups: Boolean,
                        waiter: Boolean,
                        outdoor: Boolean,
                        takeout: Boolean
                    },
                    specialties: {
                        coffee: Boolean,
                        drinks: Boolean,
                        breakfast: Boolean,
                        dinner: Boolean,
                        lunch: Boolean
                    }
                }
            },
            personality: {
                birthday: Date
            },
            payment_options: {
                amex: Boolean,
                cash_only: Boolean,
                discover: Boolean,
                mastercard: Boolean,
                visa: Boolean
            }
        }
    },
    photos: [{
        _id: String,
        source: String
    }],
    creation: {
        time : Date,
        user : { type: Schema.Types.ObjectId, ref: 'User' }
    },
    billing: {
        active: Boolean,
        evaluation: Boolean,
        expiration: Date,
        tickets: [{
            time: Date,
            validity: {
                months: Number,
                days: Number
            },
            payment_type: String,
            paid: Boolean,
            transaction_id: String
        }]
    },
    owners: [{ type: Schema.Types.ObjectId, ref: 'Owner' }]
});

// export user model
module.exports = mongoose.model('Fanpage', fanpageSchema);
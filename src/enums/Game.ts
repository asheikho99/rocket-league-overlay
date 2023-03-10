export const enum Game {
    BALL_HIT = "game:ball_hit",
    GOAL_SCORED = "game:goal_scored",
    MATCH_INITIALIZED = "game:initialized",
    MATCH_CREATED = "game:match_created",
    MATCH_DESTROYED = "game:match_destroyed",
    MATCH_ENDED = "game:match_ended",
    PODIUM_START = "game:podium_start",
    POST_COUNTDOWN_BEGIN = "game:post_countdown_begin",
    PRE_COUNTDOWN_BEGIN = "game:pre_countdown_begin",
    REPLAY_START = "game:replay_start",
    REPLAY_WILL_END = "game:replay_will_end",
    REPLAY_END = "game:replay_end",
    STATFEED_EVENT = "game:statfeed_event",
    UPDATE_STATE = "game:update_state",
    VERSION = "sos:version",
    CLOCK_STARTED = "game:clock_started",
    CLOCK_UPDATED_SECONDS = "game:clock_updated_seconds",
    CLOCK_STOPPED = "game:clock_stopped",
    ROUND_STARTED_GO = "game:round_started_go",
}
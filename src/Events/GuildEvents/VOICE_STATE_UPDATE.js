class VOICE_STATE_UPDATE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("VoiceStateUpdated", packet);
  }
}

module.exports = VOICE_STATE_UPDATE;
